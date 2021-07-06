import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaAvgFieldsModelBase } from "./PokemonV2PalparkareaAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaAvgFieldsModel */
export interface PokemonV2PalparkareaAvgFieldsModelType extends Instance<typeof PokemonV2PalparkareaAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaAvgFieldsModel */
export { selectFromPokemonV2PalparkareaAvgFields, pokemonV2PalparkareaAvgFieldsModelPrimitives, PokemonV2PalparkareaAvgFieldsModelSelector } from "./PokemonV2PalparkareaAvgFieldsModel.base"

/**
 * PokemonV2PalparkareaAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PalparkareaAvgFieldsModel = PokemonV2PalparkareaAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
