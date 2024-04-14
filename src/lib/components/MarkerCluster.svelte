<script lang="ts">
import { scriptCallbacks } from "$lib/stores";
import type { MapContext } from "$lib/types";
import { MarkerClustering, addMarkerClustering } from "$lib/utils/marker-clustering.js";
import { getContext, setContext } from "svelte";

const svg = `
<svg fill="#53b83a" width="40px" height="40px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-512,-320)">
        <g id="Icons1" serif:id="Icons">
            <g id="check-selected">
                <g transform="matrix(0.10009,1.645e-33,1.645e-33,0.10009,511.942,319.993)">
                    <path d="M321.714,559.995C383.452,559.4 444.576,533.825 488.528,490.39C540.728,438.804 567.614,362.474 558.237,289.61C542.165,164.734 439.517,80 320.172,80C229.504,80 141.375,136.719 102.723,218.967C73.131,281.935 73.079,357.952 102.723,421.033C141.101,502.698 227.781,559.119 318.63,559.995C319.658,559.998 320.686,559.998 321.714,559.995ZM318.887,519.994C226.669,519.105 140.633,447.794 123.527,356.366C111.467,291.905 134.234,222.15 181.658,176.375C237.036,122.923 324.063,105.014 396.424,135.314C461.174,162.428 509.632,225.368 518.562,294.718C526.216,354.158 504.885,416.454 462.966,459.367C426.2,497.004 374.636,519.481 321.457,519.994C320.6,519.997 319.744,519.997 318.887,519.994Z" style="fill-rule:nonzero;"/>
                </g>
                <g transform="matrix(1.20036,0,0,1.20036,-108.995,-70.5272)">
                    <circle cx="543.992" cy="352" r="14.13"/>
                </g>
            </g>
            <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)">
                <g id="coffee-beans">
                    <g id="coffee-bean1" serif:id="coffee-bean">
                    </g>
                </g>
            </g>
            <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
                <g id="coffee-beans-filled">
                    <g id="coffee-bean2" serif:id="coffee-bean">
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`;

export let disableClickZoom = false;
export let minClusterSize = 2;
export let maxZoom = 16;
export let gridSize = 100;
export let icons: Array<string | naver.maps.ImageIcon | naver.maps.SymbolIcon | naver.maps.HtmlIcon> = [
  {
    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(data:image/svg+xml;base64,${btoa(svg)});background-size:contain;"></div>`,
    size: [40, 40],
    anchor: [20, 20]
  }
];
export let indexGenerator: number[] = [100];
export let averageCenter = true;
export let stylingFunction: (clusterMarker: naver.maps.Marker, count: number) => void = (clusterMarker: naver.maps.Marker, count: number) => {
  const element = clusterMarker.getElement().querySelector("div:first-child") as Element;
  element.textContent = count.toString();
};

const { mapInstance } = getContext<MapContext>("map");

const markers: naver.maps.Marker[] = [];

setContext("markerCluster", {
  markers
});

const initCluster = (map: naver.maps.Map) => {
  new MarkerClustering({
    minClusterSize,
    maxZoom,
    map,
    averageCenter, 
    markers: markers,
    disableClickZoom,
    gridSize,
    icons,
    indexGenerator,
    stylingFunction
  });
};

mapInstance.subscribe((map) => {
  if (map) initCluster(map);
});

scriptCallbacks.update((callbacks) => {
  callbacks.push(addMarkerClustering);
  return callbacks;
});
</script>

<slot />