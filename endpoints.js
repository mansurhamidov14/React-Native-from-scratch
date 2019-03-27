/**
 * Created by user on 17.03.2019.
 */

export const baseUrl = 'http://api.football-data.org';
export const leaguesEndpoint = `/v2/competitions?plan=TIER_ONE`;
export const getTeamsUrlByLeague = (id) =>  `/v2/competitions/${id}/teams`;
export const getLeagueStandings = (id) => `/v2/competitions/${id}/standings`;
export const getLeagueFixturesByMatchDay = (id, matchday) => `/v2/competitions/${id}/matches?matchday=${matchday}`;