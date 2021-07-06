import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesAggregateFieldsModelBase } from "./PokemonV2ItemspritesAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesAggregateFieldsModel */
export interface PokemonV2ItemspritesAggregateFieldsModelType extends Instance<typeof PokemonV2ItemspritesAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesAggregateFieldsModel */
export { selectFromPokemonV2ItemspritesAggregateFields, pokemonV2ItemspritesAggregateFieldsModelPrimitives, PokemonV2ItemspritesAggregateFieldsModelSelector } from "./PokemonV2ItemspritesAggregateFieldsModel.base"

/**
 * PokemonV2ItemspritesAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemsprites"
 */
export const PokemonV2ItemspritesAggregateFieldsModel = PokemonV2ItemspritesAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
