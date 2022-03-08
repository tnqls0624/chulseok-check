import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any; // 핫 리로딩
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  // app.use(cookieParser());
  // app.use(passport.initialize());
  // app.use(
  //   passport.session({
  //     resave: false,
  //     saveUninitialized: false,
  //     secret: process.env.COOKIE_SECRET,
  //     cookie: {
  //       httpOnly: true,
  //     },
  //   }),
  // );
  await app.listen(port);
  console.log(`열린 포트 번호 : ${port}`);

  // 핫 리로딩

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
