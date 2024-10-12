export type WeatherApiResponse = {
    location: {
        name: string;
    };
    forecast: {
        forecastday: {
            date: string;
            day: {
                avgtemp_c: string;
                condition: {
                    text: string;
                    icon: string;
                };
            };
        }[];
    };
};

export type FilteredApiResponse = {
    date: string;
    day: {
        avgtemp_c: string;
        condition: {
            text: string;
            icon: string;
        };
    };
}[];

export type ForecastDay = {
    date: string;
    avgtemp: string;
    conditionText: string;
    icon: string;
};
