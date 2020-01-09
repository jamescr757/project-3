
export default {
    
    teamsArray: ["bruins", "sabres", "red wings", "panthers", "canadiens", "senators", "lightning", "maple leafs", "hurricanes", "blue jackets", "devils", "islanders", "rangers", "flyers", "penguins", "capitals", "blackhawks", "avalanche", "stars", "wild", "predators", "blues", "jets", "ducks", "coyotes", "flames", "oilers", "golden knights", "kings", "sharks", "canucks"],

    teamIDGenerator(teamName) {
        return this.teamsArray.indexOf(teamName);
    },

    teamDivisionGenerator(teamName) {
        const teamIndex = this.teamIDGenerator(teamName);

        if (teamIndex <= 7 && teamIndex > 0) return "Atlantic";

        else if (teamIndex <= 15 && teamIndex > 0) return "Metropolitan";

        else if (teamIndex <= 22 && teamIndex > 0) return "Central";

        else if (teamIndex > 0) return "Pacific";

        else return false;
    },

    teamConferenceGenerator(teamName) {
        const teamIndex = this.teamIDGenerator(teamName);

        if (teamIndex <= 15) return "Eastern";

        else return "Western";
    },

    teamNameConverter(teamName) {
        return teamName.replace(/\s/g, "-")
    },

    teamNameDehyphenator(teamName) {
        return teamName.replace(/-/g, " ")
    },

    teamNameJoiner5 (homeTeam, awayTeam) {
        const homeTeamModified = homeTeam.replace(/\s/g, "+");
        const awayTeamModified = awayTeam.replace(/\s/g, "+");
        return awayTeamModified + "+vs+" + homeTeamModified;
    },

    teamNameJoiner9 (homeTeam, awayTeam) {
        const homeTeamModified = homeTeam.replace(/\s/g, "+");
        const awayTeamModified = awayTeam.replace(/\s/g, "+");
        return awayTeamModified + "+@+" + homeTeamModified;
    },

    teamFullName (team) {

        switch (team) {
            case "bruins":
                return "boston bruins"
            case "sabres":
                return "buffalo sabres"
            case "red wings":
                return "detroit red wings"
            case "panthers":
                return "florida panthers"
            case "canadiens":
                return "montreal canadiens"
            case "senators":
                return "ottawa senators"
            case "lightning":
                return "tampa bay lightning"
            case "maple leafs":
                return "toronto maple leafs"
            case "hurricanes":
                return "carolina hurricanes"
            case "blue jackets":
                return "columbus blue jackets"
            case "devils":
                return "new jersey devils"
            case "islanders":
                return "new york islanders"
            case "rangers":
                return "new york rangers"
            case "flyers":
                return "philadelphia flyers"
            case "penguins":
                return "pittsburgh penguins"
            case "capitals":
                return "washington capitals"
            case "blackhawks":
                return "chicago blackhawks"
            case "avalanche":
                return "colorado avalanche"
            case "stars":
                return "dallas stars"
            case "wild":
                return "minnesota wild"
            case "predators":
                return "nashville predators"
            case "blues":
                return "st. louis blues"
            case "jets":
                return "winnipeg jets"
            case "ducks":
                return "anaheim ducks"
            case "coyotes":
                return "arizona coyotes"
            case "flames":
                return "calgary flames"
            case "oilers":
                return "edmonton oilers"
            case "golden knights":
                return "vegas golden knights"
            case "kings":
                return "los angeles kings"
            case "sharks":
                return "san jose sharks"
            case "canucks":
                return "vancouver canucks"
            
        }
    },

    teamShortName (team) {

        switch (team) {
            case "boston bruins":
                return "bruins"
            case "buffalo sabres":
                return "sabres"
            case "detroit red wings":
                return "red wings"
            case "florida panthers":
                return "panthers"
            case "montreal canadiens":
                return "canadiens"
            case "ottawa senators":
                return "senators"
            case "tampa bay lightning":
                return "lightning"
            case "toronto maple leafs":
                return "maple leafs"
            case "carolina hurricanes":
                return "hurricanes"
            case "columbus blue jackets":
                return "blue jackets"
            case "new jersey devils":
                return "devils"
            case "new york islanders":
                return "islanders"
            case "new york rangers":
                return "rangers"
            case "philadelphia flyers":
                return "flyers"
            case "pittsburgh penguins":
                return "penguins"
            case "washington capitals":
                return "capitals"
            case "chicago blackhawks":
                return "blackhawks"
            case "colorado avalanche":
                return "avalanche"
            case "dallas stars":
                return "stars"
            case "minnesota wild":
                return "wild"
            case "nashville predators":
                return "predators"
            case "st. louis blues":
                return "blues"
            case "winnipeg jets":
                return "jets"
            case "anaheim ducks":
                return "ducks"
            case "arizona coyotes":
                return "coyotes"
            case "calgary flames":
                return "flames"
            case "edmonton oilers":
                return "oilers"
            case "vegas golden knights":
                return "golden knights"
            case "los angeles kings":
                return "kings"
            case "san jose sharks":
                return "sharks"
            case "vancouver canucks":
                return "canucks"
            
        }
    }
}



