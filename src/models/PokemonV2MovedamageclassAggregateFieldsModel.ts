import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassAggregateFieldsModelBase } from "./PokemonV2MovedamageclassAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassAggregateFieldsModel */
export interface PokemonV2MovedamageclassAggregateFieldsModelType extends Instance<typeof PokemonV2MovedamageclassAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassAggregateFieldsModel */
export { selectFromPokemonV2MovedamageclassAggregateFields, pokemonV2MovedamageclassAggregateFieldsModelPrimitives, PokemonV2MovedamageclassAggregateFieldsModelSelector } from "./PokemonV2MovedamageclassAggregateFieldsModel.base"

/**
 * PokemonV2MovedamageclassAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movedamageclass"
 */
export const PokemonV2MovedamageclassAggregateFieldsModel = PokemonV2MovedamageclassAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
