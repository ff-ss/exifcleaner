import { platform } from "os";

export enum Platform {
	NIX,
	WIN,
	MAC,
}

export function isMac(): boolean {
	return getPlatform() == Platform.MAC;
}
export function isWindows(): boolean {
	return getPlatform() == Platform.WIN;
}
export function isLinux(): boolean {
	return getPlatform() == Platform.NIX;
}

export function getPlatform(): Platform {
	const currentPlatform = platform();

	switch (currentPlatform) {
		case "aix":
		case "freebsd":
		case "linux":
		case "openbsd":
		case "android":
		case "sunos":
			return Platform.NIX;
		case "darwin":
			return Platform.MAC;
		case "win32":
			return Platform.WIN;
		default:
			throw `Did not recognize platform ${currentPlatform}`;
	}
}
