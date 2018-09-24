import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { TodoProvider } from "../providers/todo/todo";
import { MyApp } from "./app.component";
import { ArchivedTodosPage } from "../pages/archived-todos/archived-todos";


@NgModule({
  declarations: [MyApp, HomePage, ArchivedTodosPage],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ArchivedTodosPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TodoProvider
  ]
})
export class AppModule {}
