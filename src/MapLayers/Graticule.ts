/*
 * Partially copied from https://github.com/ablakey/Leaflet.SimpleGraticule and https://github.com/FacilMap/Leaflet.AutoGraticule/tree/main
 * Copyright (c) 2014-2015, Andrew Blakey
 * Copyright (c) 2020, Candid Dauth
 * BSD-2-Clause license  
 */

import * as L from "leaflet"

import { LatLngBounds, LayerGroup, LayerOptions, Map, Point, Util } from "leaflet";

export interface GraticuleOptions extends LayerOptions {
    distance: (zoom: number) => number
}


export class Graticule extends LayerGroup {
    
    options: GraticuleOptions = {
        distance: () => 512
    }

    lineStyle = {
        stroke: true,
        color: '#111',
        opacity: 0.6,
        weight: 1,
        interactive: false,
        clickable: false //legacy support
    }

    _bounds!: LatLngBounds;    

    constructor(options?: Partial<GraticuleOptions>) {
        super()
        Util.setOptions(this, options)
    }

    onAdd(map: Map): this {
        this._map = map
        this.redraw()
        this._map.on("viewreset", this.redraw, this)
        this._map.on("moveend", this.redraw, this)

        this.eachLayer(this._map.addLayer, this._map)

        return this
    }

    onRemove(map: Map): this {
        map.off("viewreset", this.redraw, this)
        map.off("moveend", this.redraw, this)

        this.eachLayer(this._map.removeLayer, this._map)

        return this;
    }

    redraw() {
        this._bounds = this._map.getBounds().pad(0.5);
        this.clearLayers();
        this.constructLines();

        return this
    }

    constructLines() {
        var crs = this._map.options.crs!
        var distance = this.options.distance(this._map.getZoom())
        var nw = crs.project(this._bounds.getNorthWest())
        var se = crs.project(this._bounds.getSouthEast())
        var x_line_count = Math.ceil((se.x - nw.x) / distance)
        var z_line_count = Math.ceil((nw.y - se.y) / distance)
        var x_line_min = Math.floor(nw.x / distance) * distance
        var z_line_min = Math.floor(se.y / distance) * distance

        var lines = new Array(x_line_count + z_line_count)

        for (var i = 0 ; i <= x_line_count ; i++){
            var x = x_line_min + i * distance
            lines[i] = new L.Polyline([
                crs.unproject(new Point(x, nw.y)),
                crs.unproject(new Point(x, se.y)),
            ], this.lineStyle)
        }

        for (var i = 0 ; i <= z_line_count ; i++){
            var z = z_line_min + i * distance
            lines[i + x_line_count] = new L.Polyline([
                crs.unproject(new Point(nw.x, z)),
                crs.unproject(new Point(se.x, z)),
            ], this.lineStyle)
        }

        lines.forEach(this.addLayer, this);
    }
}