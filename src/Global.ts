
type Dictionary = { [key: string]: any };

function notnull<T>(value: T | null): T
{
	if (!value)
		throw new Error();
	return value;
}

function parseQueryString(str: string)
{
	const result: { [_: string]: string } = {};
	const pairs = str.split("&");
	for (const pair of pairs)
	{
		const p = pair.split("=");
		const key = decodeURIComponent(p[0]);
		const value = decodeURIComponent(p[1]);
		result[key] = value;
		//console.log("  " + key + " = " + value);
	}
	return result;
}

class Thumbnail
{
	url: string;
	width: number;
	height: number;
}

class Video
{
	id: string;
	title: string;
	description: string;
	datePublished: Date;
	thumbnails: Thumbnail[];
}

class Channel
{
	id: string;
	title: string;
	description: string;
	thumbnails: Thumbnail[];
	videos: Video[];

	enabled: boolean;
}

class SavedState
{
	channels: Channel[];
	videoId: string;
}