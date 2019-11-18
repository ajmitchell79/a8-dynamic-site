import { Injectable } from "@angular/core";
import { AppFrameworkService } from "../appFramework/app-framework.service";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor(private appFrameworkService: AppFrameworkService) {}

  public getAppFrameworkData(): Promise<boolean> {
    const configService = new Promise<boolean>(resolve => {
      this.load();
      resolve(true);
    });
    return configService;
  }

  private async load() {
    this.appFrameworkService.load();
  }
}
