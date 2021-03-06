import { app } from "electron";
import path from "path";
import { isLinux } from "../common/platform";
import { i18n } from "./i18n";

export function showAboutWindow(author: string, websiteUrl: string): void {
	let aboutPanelOptions = {
		applicationName: app.getName(),
		applicationVersion: app.getVersion(),
		copyright: `${i18n("aboutwindow:copyright")} © ${author}`,
		version: app.getVersion(),
		// credits: author, //optional
		// authors: [author], //optional
		website: websiteUrl,
		iconPath: iconPath(),
	};

	app.setAboutPanelOptions(aboutPanelOptions);
	app.showAboutPanel();
}

function iconPath(): string {
	if (isLinux()) {
		return path.join(__dirname, "..", "..", "exifcleaner.png");
	} else {
		return path.join(__dirname, "static", "icon.png");
	}
}
