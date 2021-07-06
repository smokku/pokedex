/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutionchainModel, PokemonV2EvolutionchainModelType } from "./PokemonV2EvolutionchainModel"
import { PokemonV2EvolutionchainModelSelector } from "./PokemonV2EvolutionchainModel.base"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2GrowthrateModel, PokemonV2GrowthrateModelType } from "./PokemonV2GrowthrateModel"
import { PokemonV2GrowthrateModelSelector } from "./PokemonV2GrowthrateModel.base"
import { PokemonV2PalparkAggregateModel, PokemonV2PalparkAggregateModelType } from "./PokemonV2PalparkAggregateModel"
import { PokemonV2PalparkAggregateModelSelector } from "./PokemonV2PalparkAggregateModel.base"
import { PokemonV2PalparkModel, PokemonV2PalparkModelType } from "./PokemonV2PalparkModel"
import { PokemonV2PalparkModelSelector } from "./PokemonV2PalparkModel.base"
import { PokemonV2PokemonAggregateModel, PokemonV2PokemonAggregateModelType } from "./PokemonV2PokemonAggregateModel"
import { PokemonV2PokemonAggregateModelSelector } from "./PokemonV2PokemonAggregateModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { PokemonV2PokemondexnumberAggregateModel, PokemonV2PokemondexnumberAggregateModelType } from "./PokemonV2PokemondexnumberAggregateModel"
import { PokemonV2PokemondexnumberAggregateModelSelector } from "./PokemonV2PokemondexnumberAggregateModel.base"
import { PokemonV2PokemondexnumberModel, PokemonV2PokemondexnumberModelType } from "./PokemonV2PokemondexnumberModel"
import { PokemonV2PokemondexnumberModelSelector } from "./PokemonV2PokemondexnumberModel.base"
import { PokemonV2PokemonegggroupAggregateModel, PokemonV2PokemonegggroupAggregateModelType } from "./PokemonV2PokemonegggroupAggregateModel"
import { PokemonV2PokemonegggroupAggregateModelSelector } from "./PokemonV2PokemonegggroupAggregateModel.base"
import { PokemonV2PokemonegggroupModel, PokemonV2PokemonegggroupModelType } from "./PokemonV2PokemonegggroupModel"
import { PokemonV2PokemonegggroupModelSelector } from "./PokemonV2PokemonegggroupModel.base"
import { PokemonV2PokemonevolutionAggregateModel, PokemonV2PokemonevolutionAggregateModelType } from "./PokemonV2PokemonevolutionAggregateModel"
import { PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { PokemonV2PokemonhabitatModel, PokemonV2PokemonhabitatModelType } from "./PokemonV2PokemonhabitatModel"
import { PokemonV2PokemonhabitatModelSelector } from "./PokemonV2PokemonhabitatModel.base"
import { PokemonV2PokemonshapeModel, PokemonV2PokemonshapeModelType } from "./PokemonV2PokemonshapeModel"
import { PokemonV2PokemonshapeModelSelector } from "./PokemonV2PokemonshapeModel.base"
import { PokemonV2PokemonspeciesAggregateModel, PokemonV2PokemonspeciesAggregateModelType } from "./PokemonV2PokemonspeciesAggregateModel"
import { PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesdescriptionAggregateModel, PokemonV2PokemonspeciesdescriptionAggregateModelType } from "./PokemonV2PokemonspeciesdescriptionAggregateModel"
import { PokemonV2PokemonspeciesdescriptionAggregateModelSelector } from "./PokemonV2PokemonspeciesdescriptionAggregateModel.base"
import { PokemonV2PokemonspeciesdescriptionModel, PokemonV2PokemonspeciesdescriptionModelType } from "./PokemonV2PokemonspeciesdescriptionModel"
import { PokemonV2PokemonspeciesdescriptionModelSelector } from "./PokemonV2PokemonspeciesdescriptionModel.base"
import { PokemonV2PokemonspeciesflavortextAggregateModel, PokemonV2PokemonspeciesflavortextAggregateModelType } from "./PokemonV2PokemonspeciesflavortextAggregateModel"
import { PokemonV2PokemonspeciesflavortextAggregateModelSelector } from "./PokemonV2PokemonspeciesflavortextAggregateModel.base"
import { PokemonV2PokemonspeciesflavortextModel, PokemonV2PokemonspeciesflavortextModelType } from "./PokemonV2PokemonspeciesflavortextModel"
import { PokemonV2PokemonspeciesflavortextModelSelector } from "./PokemonV2PokemonspeciesflavortextModel.base"
import { PokemonV2PokemonspeciesnameAggregateModel, PokemonV2PokemonspeciesnameAggregateModelType } from "./PokemonV2PokemonspeciesnameAggregateModel"
import { PokemonV2PokemonspeciesnameAggregateModelSelector } from "./PokemonV2PokemonspeciesnameAggregateModel.base"
import { PokemonV2PokemonspeciesnameModel, PokemonV2PokemonspeciesnameModelType } from "./PokemonV2PokemonspeciesnameModel"
import { PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
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
    pokemonV2PokemonevolutionsByPartySpeciesId: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemonV2PokemonevolutionsByPartySpeciesId_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    /** An array relationship */
    pokemonV2PokemonevolutionsByTradeSpeciesId: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    pokemon_color_id: types.union(types.undefined, types.null, types.integer),
    pokemon_habitat_id: types.union(types.undefined, types.null, types.integer),
    pokemon_shape_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_evolutionchain: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainModel)),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An object relationship */
    pokemon_v2_growthrate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateModel)),
    /** An array relationship */
    pokemon_v2_palparks: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkModel))),
    /** An aggregate relationship */
    pokemon_v2_palparks_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PalparkAggregateModel)),
    /** An object relationship */
    pokemon_v2_pokemoncolor: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorModel)),
    /** An array relationship */
    pokemon_v2_pokemondexnumbers: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemondexnumberModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemondexnumbers_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemondexnumberAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonegggroups: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonegggroupModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonegggroups_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonegggroupAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
    /** An object relationship */
    pokemon_v2_pokemonhabitat: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatModel)),
    /** An array relationship */
    pokemon_v2_pokemons: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemons_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonAggregateModel)),
    /** An object relationship */
    pokemon_v2_pokemonshape: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeModel)),
    /** An array relationship */
    pokemon_v2_pokemonspecies: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => PokemonV2PokemonspeciesModel)))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspecies_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspeciesdescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesdescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesdescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesdescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspeciesflavortexts: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesflavortextModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesflavortexts_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesflavortextAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonspeciesnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesnameModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonspeciesnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonspeciesnameAggregateModel)),
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
  pokemonV2PokemonevolutionsByPartySpeciesId(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByPartySpeciesId`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemonV2PokemonevolutionsByPartySpeciesId_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByPartySpeciesId_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemonV2PokemonevolutionsByTradeSpeciesId(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByTradeSpeciesId`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_evolutionchain(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`pokemon_v2_evolutionchain`, PokemonV2EvolutionchainModelSelector, builder) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_growthrate(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`pokemon_v2_growthrate`, PokemonV2GrowthrateModelSelector, builder) }
  pokemon_v2_palparks(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`pokemon_v2_palparks`, PokemonV2PalparkModelSelector, builder) }
  pokemon_v2_palparks_aggregate(builder?: string | PokemonV2PalparkAggregateModelSelector | ((selector: PokemonV2PalparkAggregateModelSelector) => PokemonV2PalparkAggregateModelSelector)) { return this.__child(`pokemon_v2_palparks_aggregate`, PokemonV2PalparkAggregateModelSelector, builder) }
  pokemon_v2_pokemoncolor(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor`, PokemonV2PokemoncolorModelSelector, builder) }
  pokemon_v2_pokemondexnumbers(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumbers`, PokemonV2PokemondexnumberModelSelector, builder) }
  pokemon_v2_pokemondexnumbers_aggregate(builder?: string | PokemonV2PokemondexnumberAggregateModelSelector | ((selector: PokemonV2PokemondexnumberAggregateModelSelector) => PokemonV2PokemondexnumberAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemondexnumbers_aggregate`, PokemonV2PokemondexnumberAggregateModelSelector, builder) }
  pokemon_v2_pokemonegggroups(builder?: string | PokemonV2PokemonegggroupModelSelector | ((selector: PokemonV2PokemonegggroupModelSelector) => PokemonV2PokemonegggroupModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroups`, PokemonV2PokemonegggroupModelSelector, builder) }
  pokemon_v2_pokemonegggroups_aggregate(builder?: string | PokemonV2PokemonegggroupAggregateModelSelector | ((selector: PokemonV2PokemonegggroupAggregateModelSelector) => PokemonV2PokemonegggroupAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonegggroups_aggregate`, PokemonV2PokemonegggroupAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolutions(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolutions_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_pokemonhabitat(builder?: string | PokemonV2PokemonhabitatModelSelector | ((selector: PokemonV2PokemonhabitatModelSelector) => PokemonV2PokemonhabitatModelSelector)) { return this.__child(`pokemon_v2_pokemonhabitat`, PokemonV2PokemonhabitatModelSelector, builder) }
  pokemon_v2_pokemons(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemons`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_pokemons_aggregate(builder?: string | PokemonV2PokemonAggregateModelSelector | ((selector: PokemonV2PokemonAggregateModelSelector) => PokemonV2PokemonAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemons_aggregate`, PokemonV2PokemonAggregateModelSelector, builder) }
  pokemon_v2_pokemonshape(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`pokemon_v2_pokemonshape`, PokemonV2PokemonshapeModelSelector, builder) }
  pokemon_v2_pokemonspecies(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonspecies_aggregate(builder?: string | PokemonV2PokemonspeciesAggregateModelSelector | ((selector: PokemonV2PokemonspeciesAggregateModelSelector) => PokemonV2PokemonspeciesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspecies_aggregate`, PokemonV2PokemonspeciesAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescriptions(builder?: string | PokemonV2PokemonspeciesdescriptionModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionModelSelector) => PokemonV2PokemonspeciesdescriptionModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescriptions`, PokemonV2PokemonspeciesdescriptionModelSelector, builder) }
  pokemon_v2_pokemonspeciesdescriptions_aggregate(builder?: string | PokemonV2PokemonspeciesdescriptionAggregateModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionAggregateModelSelector) => PokemonV2PokemonspeciesdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesdescriptions_aggregate`, PokemonV2PokemonspeciesdescriptionAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortexts(builder?: string | PokemonV2PokemonspeciesflavortextModelSelector | ((selector: PokemonV2PokemonspeciesflavortextModelSelector) => PokemonV2PokemonspeciesflavortextModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortexts`, PokemonV2PokemonspeciesflavortextModelSelector, builder) }
  pokemon_v2_pokemonspeciesflavortexts_aggregate(builder?: string | PokemonV2PokemonspeciesflavortextAggregateModelSelector | ((selector: PokemonV2PokemonspeciesflavortextAggregateModelSelector) => PokemonV2PokemonspeciesflavortextAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesflavortexts_aggregate`, PokemonV2PokemonspeciesflavortextAggregateModelSelector, builder) }
  pokemon_v2_pokemonspeciesnames(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesnames`, PokemonV2PokemonspeciesnameModelSelector, builder) }
  pokemon_v2_pokemonspeciesnames_aggregate(builder?: string | PokemonV2PokemonspeciesnameAggregateModelSelector | ((selector: PokemonV2PokemonspeciesnameAggregateModelSelector) => PokemonV2PokemonspeciesnameAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonspeciesnames_aggregate`, PokemonV2PokemonspeciesnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonspecies() {
  return new PokemonV2PokemonspeciesModelSelector()
}

export const pokemonV2PokemonspeciesModelPrimitives = selectFromPokemonV2Pokemonspecies().base_happiness.capture_rate.evolution_chain_id.evolves_from_species_id.forms_switchable.gender_rate.generation_id.growth_rate_id.has_gender_differences.hatch_counter.is_baby.is_legendary.is_mythical.name.order.pokemon_color_id.pokemon_habitat_id.pokemon_shape_id
