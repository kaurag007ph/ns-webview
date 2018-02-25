import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { WebViewInterface } from 'nativescript-webview-interface';
import { WebView, LoadEventData } from 'ui/web-view';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onWebViewLoaded(args) {
        const webView: WebView = args.object;
        const webViewInterface = new WebViewInterface(webView, '~/www/index.html');
        webViewInterface.on("nsWebViewInterfaceTest", (payload) => {
            console.log(JSON.stringify(payload));
        });
        setTimeout(() => {
            webViewInterface.emit("nsWebViewInterfaceWrite", {
                message: "Great"
            });
            // webViewInterface.callJSFunction("init", undefined, (response) => {
            //     console.log(JSON.stringify(response));
            // });
        }, 3000);
        console.log('WebView loaded');
    }
}