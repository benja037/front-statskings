// src/lib/data.ts
import api from './fetcher';

export interface Torneo {
  sofascore_id: number;
  nombre: string;
  nombre_temporada: string;
  año_temporada: number;
}

export interface Partido {
  id_sofascore_evento: number;
  equipo_local: { nombre: string };
  equipo_visitante: { nombre: string };
  ronda: string;
}

export interface Evento {
  equipo_local: string;
  equipo_visitante: string;
  puntuacion_local: number;
  puntuacion_visitante: number;
  combinated_stats_local: CombinedStat[];
  combinated_stats_visitante: CombinedStat[];
}

export interface Player {
  nombre: string;
}

export interface CombinedStat {
  player: string;
  numero_camiseta: number;
  suplente: boolean;
  total_pases: number;
  pases_precisos: number;
  total_balones_en_largo: number;
  balones_en_largo_completados: number;
  total_centros: number;
  centros_completados: number;
  duelos_aereos_perdidos: number;
  duelos_aereos_ganados: number;
  minutos_jugados: number;
  duelos_perdidos: number;
  duelos_ganados: number;
  tiros_fuera: number;
  tiros_dentro: number;
  goles: number;
  sofascore_rating: number;
  perdida_de_posesion: number;
  fouls: number;
  total_tackle: number;
  dispossessed: number;
  total_offside: number;
  touches: number;
  key_pass: number;
  was_fouled: number;
  total_contest: number;
  won_contest: number;
  total_clearance: number;
  interception_won: number;
  big_chance_missed: number;
  blocked_scoring_attempt: number;
  big_chance_created: number;
  outfielder_block: number;
  challenge_lost: number;
  goal_assist: number;
  captain: boolean;
  hit_woodwork: number;
  penalty_won: number;
  expected_goals: number;
  expected_assists: number;
  own_goals: number;
  error_lead_to_a_shot: number;
  error_lead_to_a_goal: number;
  total_keeper_sweeper: number;
  accurate_keeper_sweeper: number;
  saved_shots_from_inside_the_box: number;
  saves: number;
  punches: number;
  good_high_claim: number;
  goals_prevented: number;
  Min: number;
  Gls: number;
  Ast: number;
  Sh: number;
  SoT: number;
  CrdY: number;
  CrdR: number;
  Fls: number;
  Fld: number;
  Off: number;
  Crs: number;
  TklW: number;
  Int: number;
  OG: number;
  PKatt: number;
  PKwon: number | null;
  PK: number;
  PKcon: number | null;
  Pos: string;
  edad_dia_partido: string;
  nation: string;
  fbref_player_id: string;
}

export async function fetchTorneos() {
  const response = await api.get<Torneo[]>('/stats/torneos/');
  return response.data;
}

export async function fetchPartidos(torneo_id: string) {
  const response = await api.get<Partido[]>(`/stats/torneo/${torneo_id}/partidos/`);
  return response.data;
}

export async function fetchEvento(evento_id: string) {
  const response = await api.get<Evento>(`/stats/evento/${evento_id}/`);
  console.log(response.data)
  return response.data;
}
