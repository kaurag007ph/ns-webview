"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var nativescript_webview_interface_1 = require("nativescript-webview-interface");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onWebViewLoaded = function (args) {
        var webView = args.object;
        var webViewInterface = new nativescript_webview_interface_1.WebViewInterface(webView, '~/www/index.html');
        webViewInterface.on("nsWebViewInterfaceTest", function (payload) {
            console.log(JSON.stringify(payload));
        });
        setTimeout(function () {
            webViewInterface.emit("nsWebViewInterfaceWrite", {
                message: "Great"
            });
            // webViewInterface.callJSFunction("init", undefined, (response) => {
            //     console.log(JSON.stringify(response));
            // });
        }, 3000);
        console.log('WebView loaded');
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxpRkFBa0U7QUFRbEU7SUFHSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUFnQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLE9BQU87WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUM7WUFDUCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQzdDLE9BQU8sRUFBRSxPQUFPO2FBQ25CLENBQUMsQ0FBQztZQUNILHFFQUFxRTtZQUNyRSw2Q0FBNkM7WUFDN0MsTUFBTTtRQUNWLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBMUJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTW1DLDBCQUFXO09BTG5DLGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXZWJWaWV3SW50ZXJmYWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXdlYnZpZXctaW50ZXJmYWNlJztcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tICd1aS93ZWItdmlldyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgb25XZWJWaWV3TG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc3Qgd2ViVmlldzogV2ViVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCB3ZWJWaWV3SW50ZXJmYWNlID0gbmV3IFdlYlZpZXdJbnRlcmZhY2Uod2ViVmlldywgJ34vd3d3L2luZGV4Lmh0bWwnKTtcbiAgICAgICAgd2ViVmlld0ludGVyZmFjZS5vbihcIm5zV2ViVmlld0ludGVyZmFjZVRlc3RcIiwgKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2ViVmlld0ludGVyZmFjZS5lbWl0KFwibnNXZWJWaWV3SW50ZXJmYWNlV3JpdGVcIiwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiR3JlYXRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB3ZWJWaWV3SW50ZXJmYWNlLmNhbGxKU0Z1bmN0aW9uKFwiaW5pdFwiLCB1bmRlZmluZWQsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWJWaWV3IGxvYWRlZCcpO1xuICAgIH1cbn0iXX0=