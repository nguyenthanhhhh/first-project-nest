import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from '../config/interface/configStore.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import {
  DEFAULT_FILE_NAME,
  DEFAULT_STORE_DIRNAME,
  STORE_CONFIG_TOKEN,
} from 'src/const/store.config';

let rootStoreConfig: StoreConfig;

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(config?: StoreRootConfig): DynamicModule {
    rootStoreConfig = StoreModule.createConfig(config);
    return {
      imports: [TypeOrmModule.forFeature([PostEntity])],
      module: RootStoreModule,
      providers: [
        StoreService,
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootStoreConfig,
        },
      ],
    };
  }

  static forFeature(config?: StoreFeatureConfig): DynamicModule {
    return {
      imports: [TypeOrmModule.forFeature([PostEntity])],
      module: StoreModule,
      providers: [
        {
          provide: 'STORE_SERVICE',
          useFactory: () => {
            const featureStoreConfig = StoreModule.createConfig({
              ...rootStoreConfig,
              ...config,
            });
            return new StoreService(featureStoreConfig);
          },
        },
      ],
      exports: ['STORE_SERVICE'],
    };
  }

  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_FILE_NAME,
    };

    return { ...defaultConfig, ...config };
  }
}
