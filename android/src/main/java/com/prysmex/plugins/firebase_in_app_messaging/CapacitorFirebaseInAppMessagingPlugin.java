package com.prysmex.plugins.firebase_in_app_messaging;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorFirebaseInAppMessaging")
public class CapacitorFirebaseInAppMessagingPlugin extends Plugin {

    private CapacitorFirebaseInAppMessaging implementation = new CapacitorFirebaseInAppMessaging();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
