import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaStddevPopFieldsModelBase } from "./PokemonV2PalparkareaStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaStddevPopFieldsModel */
export interface PokemonV2PalparkareaStddevPopFieldsModelType extends Instance<typeof PokemonV2PalparkareaStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaStddevPopFieldsModel */
export { selectFromPokemonV2PalparkareaStddevPopFields, pokemonV2PalparkareaStddevPopFieldsModelPrimitives, PokemonV2PalparkareaStddevPopFieldsModelSelector } from "./PokemonV2PalparkareaStddevPopFieldsModel.base"

/**
 * PokemonV2PalparkareaStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PalparkareaStddevPopFieldsModel = PokemonV2PalparkareaStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
