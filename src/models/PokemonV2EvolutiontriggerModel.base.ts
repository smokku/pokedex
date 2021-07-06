/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggernameAggregateModel, PokemonV2EvolutiontriggernameAggregateModelType } from "./PokemonV2EvolutiontriggernameAggregateModel"
import { PokemonV2EvolutiontriggernameAggregateModelSelector } from "./PokemonV2EvolutiontriggernameAggregateModel.base"
import { PokemonV2EvolutiontriggernameModel, PokemonV2EvolutiontriggernameModelType } from "./PokemonV2EvolutiontriggernameModel"
import { PokemonV2EvolutiontriggernameModelSelector } from "./PokemonV2EvolutiontriggernameModel.base"
import { PokemonV2PokemonevolutionAggregateModel, PokemonV2PokemonevolutionAggregateModelType } from "./PokemonV2PokemonevolutionAggregateModel"
import { PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerBase
 * auto generated base class for the model PokemonV2EvolutiontriggerModel.
 *
 * columns and relationships of "pokemon_v2_evolutiontrigger"
 */
export const PokemonV2EvolutiontriggerModelBase = ModelBase
  .named('PokemonV2Evolutiontrigger')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger"), "pokemon_v2_evolutiontrigger"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_evolutiontriggernames: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutiontriggernameModel))),
    /** An aggregate relationship */
    pokemon_v2_evolutiontriggernames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2EvolutiontriggernameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonevolutionAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_evolutiontriggernames(builder?: string | PokemonV2EvolutiontriggernameModelSelector | ((selector: PokemonV2EvolutiontriggernameModelSelector) => PokemonV2EvolutiontriggernameModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggernames`, PokemonV2EvolutiontriggernameModelSelector, builder) }
  pokemon_v2_evolutiontriggernames_aggregate(builder?: string | PokemonV2EvolutiontriggernameAggregateModelSelector | ((selector: PokemonV2EvolutiontriggernameAggregateModelSelector) => PokemonV2EvolutiontriggernameAggregateModelSelector)) { return this.__child(`pokemon_v2_evolutiontriggernames_aggregate`, PokemonV2EvolutiontriggernameAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolutions(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolutions_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Evolutiontrigger() {
  return new PokemonV2EvolutiontriggerModelSelector()
}

export const pokemonV2EvolutiontriggerModelPrimitives = selectFromPokemonV2Evolutiontrigger().name
