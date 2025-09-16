import * as Counterscale from "@counterscale/tracker";

export namespace EventTracker {
    const doTrackBeam = Math.random() < 0.2

    export function init() {
        Counterscale.init({
            siteId: "datapack-map",
            reporterUrl: "https://counterscale.jacobsjo.eu/collect",
            reportOnLocalhost: false
        });
    }

    export function track(event: string ){ 
        if ((window as any).beam !== undefined && doTrackBeam) {
            (window as any).beam("/event/" + event)
        }

        Counterscale.trackPageview({
            url: "/event/" + event
        })
    }
}