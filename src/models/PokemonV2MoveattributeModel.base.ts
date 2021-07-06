/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributedescriptionAggregateModel, PokemonV2MoveattributedescriptionAggregateModelType } from "./PokemonV2MoveattributedescriptionAggregateModel"
import { PokemonV2MoveattributedescriptionAggregateModelSelector } from "./PokemonV2MoveattributedescriptionAggregateModel.base"
import { PokemonV2MoveattributedescriptionModel, PokemonV2MoveattributedescriptionModelType } from "./PokemonV2MoveattributedescriptionModel"
import { PokemonV2MoveattributedescriptionModelSelector } from "./PokemonV2MoveattributedescriptionModel.base"
import { PokemonV2MoveattributemapAggregateModel, PokemonV2MoveattributemapAggregateModelType } from "./PokemonV2MoveattributemapAggregateModel"
import { PokemonV2MoveattributemapAggregateModelSelector } from "./PokemonV2MoveattributemapAggregateModel.base"
import { PokemonV2MoveattributemapModel, PokemonV2MoveattributemapModelType } from "./PokemonV2MoveattributemapModel"
import { PokemonV2MoveattributemapModelSelector } from "./PokemonV2MoveattributemapModel.base"
import { PokemonV2MoveattributenameAggregateModel, PokemonV2MoveattributenameAggregateModelType } from "./PokemonV2MoveattributenameAggregateModel"
import { PokemonV2MoveattributenameAggregateModelSelector } from "./PokemonV2MoveattributenameAggregateModel.base"
import { PokemonV2MoveattributenameModel, PokemonV2MoveattributenameModelType } from "./PokemonV2MoveattributenameModel"
import { PokemonV2MoveattributenameModelSelector } from "./PokemonV2MoveattributenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeBase
 * auto generated base class for the model PokemonV2MoveattributeModel.
 *
 * columns and relationships of "pokemon_v2_moveattribute"
 */
export const PokemonV2MoveattributeModelBase = ModelBase
  .named('PokemonV2Moveattribute')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute"), "pokemon_v2_moveattribute"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_moveattributedescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributedescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_moveattributedescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributedescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_moveattributemaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributemapModel))),
    /** An aggregate relationship */
    pokemon_v2_moveattributemaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributemapAggregateModel)),
    /** An array relationship */
    pokemon_v2_moveattributenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributenameModel))),
    /** An aggregate relationship */
    pokemon_v2_moveattributenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveattributenameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_moveattributedescriptions(builder?: string | PokemonV2MoveattributedescriptionModelSelector | ((selector: PokemonV2MoveattributedescriptionModelSelector) => PokemonV2MoveattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_moveattributedescriptions`, PokemonV2MoveattributedescriptionModelSelector, builder) }
  pokemon_v2_moveattributedescriptions_aggregate(builder?: string | PokemonV2MoveattributedescriptionAggregateModelSelector | ((selector: PokemonV2MoveattributedescriptionAggregateModelSelector) => PokemonV2MoveattributedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributedescriptions_aggregate`, PokemonV2MoveattributedescriptionAggregateModelSelector, builder) }
  pokemon_v2_moveattributemaps(builder?: string | PokemonV2MoveattributemapModelSelector | ((selector: PokemonV2MoveattributemapModelSelector) => PokemonV2MoveattributemapModelSelector)) { return this.__child(`pokemon_v2_moveattributemaps`, PokemonV2MoveattributemapModelSelector, builder) }
  pokemon_v2_moveattributemaps_aggregate(builder?: string | PokemonV2MoveattributemapAggregateModelSelector | ((selector: PokemonV2MoveattributemapAggregateModelSelector) => PokemonV2MoveattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributemaps_aggregate`, PokemonV2MoveattributemapAggregateModelSelector, builder) }
  pokemon_v2_moveattributenames(builder?: string | PokemonV2MoveattributenameModelSelector | ((selector: PokemonV2MoveattributenameModelSelector) => PokemonV2MoveattributenameModelSelector)) { return this.__child(`pokemon_v2_moveattributenames`, PokemonV2MoveattributenameModelSelector, builder) }
  pokemon_v2_moveattributenames_aggregate(builder?: string | PokemonV2MoveattributenameAggregateModelSelector | ((selector: PokemonV2MoveattributenameAggregateModelSelector) => PokemonV2MoveattributenameAggregateModelSelector)) { return this.__child(`pokemon_v2_moveattributenames_aggregate`, PokemonV2MoveattributenameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Moveattribute() {
  return new PokemonV2MoveattributeModelSelector()
}

export const pokemonV2MoveattributeModelPrimitives = selectFromPokemonV2Moveattribute().name
