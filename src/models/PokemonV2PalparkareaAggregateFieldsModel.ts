import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaAggregateFieldsModelBase } from "./PokemonV2PalparkareaAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaAggregateFieldsModel */
export interface PokemonV2PalparkareaAggregateFieldsModelType extends Instance<typeof PokemonV2PalparkareaAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaAggregateFieldsModel */
export { selectFromPokemonV2PalparkareaAggregateFields, pokemonV2PalparkareaAggregateFieldsModelPrimitives, PokemonV2PalparkareaAggregateFieldsModelSelector } from "./PokemonV2PalparkareaAggregateFieldsModel.base"

/**
 * PokemonV2PalparkareaAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_palparkarea"
 */
export const PokemonV2PalparkareaAggregateFieldsModel = PokemonV2PalparkareaAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
