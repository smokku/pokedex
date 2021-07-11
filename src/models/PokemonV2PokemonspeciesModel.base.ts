/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { PokemonV2PokemonspeciesnameModel, PokemonV2PokemonspeciesnameModelType } from "./PokemonV2PokemonspeciesnameModel"
import { PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  pokemon_v2_pokemons: IObservableArray<PokemonV2PokemonModelType>;
  pokemon_v2_pokemonspecies: IObservableArray<PokemonV2PokemonspeciesModelType>;
  pokemon_v2_pokemonspecy: PokemonV2PokemonspeciesModelType;
}

/**
 * PokemonV2PokemonspeciesBase
 * auto generated base class for the model PokemonV2PokemonspeciesModel.
 *
 * columns and relationships of "pokemon_v2_pokemonspecies"
 */
export const PokemonV2PokemonspeciesModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PokemonV2Pokemonspecies')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspecies"), "pokemon_v2_pokemonspecies"),
    base_happiness: types.union(types.undefined, types.null, types.integer),
    capture_rate: types.union(types.undefined, types.null, types.integer),
    evolution_chain_id: types.union(types.undefined, types.null, types.integer),
    evolves_from_species_id: types.union(types.undefined, types.null, types.integer),
    forms_switchable: types.union(types.undefined, types.boolean),
    gender_rate: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    has_gender_differences: types.union(types.undefined, types.boolean),
    hatch_counter: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    is_baby: types.union(types.undefined, types.boolean),
    is_legendary: types.union(types.undefined, types.boolean),
    is_mythical: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    /** An array relationship */
    pokemonV2PokemonevolutionsByPartySpeciesId: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemonV2PokemonevolutionsByPartySpeciesId_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemonV2PokemonevolutionsByTradeSpeciesId: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate: types.union(types.undefined, types.frozen()),
    pokemon_color_id: types.union(types.undefined, types.null, types.integer),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.integer),
    pokemon_shape_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_evolutionchain: types.union(types.undefined, types.null, types.frozen()),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.frozen()),
    /** An object relationship */
    pokemon_v2_growthrate: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_palparks: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_palparks_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemoncolor: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorModel)),
    /** An array relationship */
    pokemon_v2_pokemondexnumbers: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemondexnumbers_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonegggroups: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonegggroups_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemonhabitat: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemons: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => PokemonV2PokemonModel)))),
    /** An aggregate relationship */
    pokemon_v2_pokemons_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemonshape: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => PokemonV2PokemonspeciesModel)))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonspeciesdescriptions: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesdescriptions_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonspeciesflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesflavortexts_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonspeciesnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesnameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesnames_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PokemonV2PokemonspeciesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PokemonV2PokemonspeciesModelSelector extends QueryBuilder {
  get base_happiness() { return this.__attr(`base_happiness`) }
  get capture_rate() { return this.__attr(`capture_rate`) }
  get evolution_chain_id() { return this.__attr(`evolution_chain_id`) }
  get evolves_from_species_id() { return this.__attr(`evolves_from_species_id`) }
  get forms_switchable() { return this.__attr(`forms_switchable`) }
  get gender_rate() { return this.__attr(`gender_rate`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get has_gender_differences() { return this.__attr(`has_gender_differences`) }
  get hatch_counter() { return this.__attr(`hatch_counter`) }
  get id() { return this.__attr(`id`) }
  get is_baby() { return this.__attr(`is_baby`) }
  get is_legendary() { return this.__attr(`is_legendary`) }
  get is_mythical() { return this.__attr(`is_mythical`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
  get pokemon_habitat_id() { return this.__attr(`pokemon_habitat_id`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
  pokemon_v2_pokemoncolor(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor`, PokemonV2PokemoncolorModelSelector, builder) }
  pokemon_v2_pokemons(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemons`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortexts(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortexts`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesnames(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesnames`, PokemonV2PokemonspeciesnameModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonspecies() {
  return new PokemonV2PokemonspeciesModelSelector()
}

export const pokemonV2PokemonspeciesModelPrimitives = selectFromPokemonV2Pokemonspecies().base_happiness.capture_rate.evolution_chain_id.evolves_from_species_id.forms_switchable.gender_rate.generation_id.growth_rate_id.has_gender_differences.hatch_counter.is_baby.is_legendary.is_mythical.name.order.pokemon_color_id.pokemon_habitat_id.pokemon_shape_id
