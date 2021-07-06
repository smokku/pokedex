import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaStddevFieldsModelBase } from "./PokemonV2PalparkareaStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaStddevFieldsModel */
export interface PokemonV2PalparkareaStddevFieldsModelType extends Instance<typeof PokemonV2PalparkareaStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaStddevFieldsModel */
export { selectFromPokemonV2PalparkareaStddevFields, pokemonV2PalparkareaStddevFieldsModelPrimitives, PokemonV2PalparkareaStddevFieldsModelSelector } from "./PokemonV2PalparkareaStddevFieldsModel.base"

/**
 * PokemonV2PalparkareaStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PalparkareaStddevFieldsModel = PokemonV2PalparkareaStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
