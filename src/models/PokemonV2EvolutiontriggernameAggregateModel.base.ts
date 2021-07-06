/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggernameAggregateFieldsModel, PokemonV2EvolutiontriggernameAggregateFieldsModelType } from "./PokemonV2EvolutiontriggernameAggregateFieldsModel"
import { PokemonV2EvolutiontriggernameAggregateFieldsModelSelector } from "./PokemonV2EvolutiontriggernameAggregateFieldsModel.base"
import { PokemonV2EvolutiontriggernameModel, PokemonV2EvolutiontriggernameModelType } from "./PokemonV2EvolutiontriggernameModel"
import { PokemonV2EvolutiontriggernameModelSelector } from "./PokemonV2EvolutiontriggernameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggernameAggregateBase
 * auto generated base class for the model PokemonV2EvolutiontriggernameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_evolutiontriggername"
 */
export const PokemonV2EvolutiontriggernameAggregateModelBase = ModelBase
  .named('PokemonV2EvolutiontriggernameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontriggername_aggregate"), "pokemon_v2_evolutiontriggername_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggernameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutiontriggernameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggernameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EvolutiontriggernameAggregateFieldsModelSelector | ((selector: PokemonV2EvolutiontriggernameAggregateFieldsModelSelector) => PokemonV2EvolutiontriggernameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EvolutiontriggernameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EvolutiontriggernameModelSelector | ((selector: PokemonV2EvolutiontriggernameModelSelector) => PokemonV2EvolutiontriggernameModelSelector)) { return this.__child(`nodes`, PokemonV2EvolutiontriggernameModelSelector, builder) }
}
export function selectFromPokemonV2EvolutiontriggernameAggregate() {
  return new PokemonV2EvolutiontriggernameAggregateModelSelector()
}

export const pokemonV2EvolutiontriggernameAggregateModelPrimitives = selectFromPokemonV2EvolutiontriggernameAggregate()
