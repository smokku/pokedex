/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionModel, PokemonV2EncounterconditionModelType } from "./PokemonV2EncounterconditionModel"
import { PokemonV2EncounterconditionModelSelector } from "./PokemonV2EncounterconditionModel.base"
import { PokemonV2EncounterconditionvaluemapAggregateModel, PokemonV2EncounterconditionvaluemapAggregateModelType } from "./PokemonV2EncounterconditionvaluemapAggregateModel"
import { PokemonV2EncounterconditionvaluemapAggregateModelSelector } from "./PokemonV2EncounterconditionvaluemapAggregateModel.base"
import { PokemonV2EncounterconditionvaluemapModel, PokemonV2EncounterconditionvaluemapModelType } from "./PokemonV2EncounterconditionvaluemapModel"
import { PokemonV2EncounterconditionvaluemapModelSelector } from "./PokemonV2EncounterconditionvaluemapModel.base"
import { PokemonV2EncounterconditionvaluenameAggregateModel, PokemonV2EncounterconditionvaluenameAggregateModelType } from "./PokemonV2EncounterconditionvaluenameAggregateModel"
import { PokemonV2EncounterconditionvaluenameAggregateModelSelector } from "./PokemonV2EncounterconditionvaluenameAggregateModel.base"
import { PokemonV2EncounterconditionvaluenameModel, PokemonV2EncounterconditionvaluenameModelType } from "./PokemonV2EncounterconditionvaluenameModel"
import { PokemonV2EncounterconditionvaluenameModelSelector } from "./PokemonV2EncounterconditionvaluenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueModel.
 *
 * columns and relationships of "pokemon_v2_encounterconditionvalue"
 */
export const PokemonV2EncounterconditionvalueModelBase = ModelBase
  .named('PokemonV2Encounterconditionvalue')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue"), "pokemon_v2_encounterconditionvalue"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    is_default: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_encountercondition: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionModel)),
    /** An array relationship */
    pokemon_v2_encounterconditionvaluemaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluemapModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterconditionvaluemaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvaluemapAggregateModel)),
    /** An array relationship */
    pokemon_v2_encounterconditionvaluenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluenameModel))),
    /** An aggregate relationship */
    pokemon_v2_encounterconditionvaluenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EncounterconditionvaluenameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get is_default() { return this.__attr(`is_default`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_encountercondition(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`pokemon_v2_encountercondition`, PokemonV2EncounterconditionModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemaps(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemaps`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
  pokemon_v2_encounterconditionvaluemaps_aggregate(builder?: string | PokemonV2EncounterconditionvaluemapAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluemapAggregateModelSelector) => PokemonV2EncounterconditionvaluemapAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluemaps_aggregate`, PokemonV2EncounterconditionvaluemapAggregateModelSelector, builder) }
  pokemon_v2_encounterconditionvaluenames(builder?: string | PokemonV2EncounterconditionvaluenameModelSelector | ((selector: PokemonV2EncounterconditionvaluenameModelSelector) => PokemonV2EncounterconditionvaluenameModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluenames`, PokemonV2EncounterconditionvaluenameModelSelector, builder) }
  pokemon_v2_encounterconditionvaluenames_aggregate(builder?: string | PokemonV2EncounterconditionvaluenameAggregateModelSelector | ((selector: PokemonV2EncounterconditionvaluenameAggregateModelSelector) => PokemonV2EncounterconditionvaluenameAggregateModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvaluenames_aggregate`, PokemonV2EncounterconditionvaluenameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Encounterconditionvalue() {
  return new PokemonV2EncounterconditionvalueModelSelector()
}

export const pokemonV2EncounterconditionvalueModelPrimitives = selectFromPokemonV2Encounterconditionvalue().encounter_condition_id.is_default.name
