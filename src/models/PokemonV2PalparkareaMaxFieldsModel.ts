import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaMaxFieldsModelBase } from "./PokemonV2PalparkareaMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaMaxFieldsModel */
export interface PokemonV2PalparkareaMaxFieldsModelType extends Instance<typeof PokemonV2PalparkareaMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaMaxFieldsModel */
export { selectFromPokemonV2PalparkareaMaxFields, pokemonV2PalparkareaMaxFieldsModelPrimitives, PokemonV2PalparkareaMaxFieldsModelSelector } from "./PokemonV2PalparkareaMaxFieldsModel.base"

/**
 * PokemonV2PalparkareaMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PalparkareaMaxFieldsModel = PokemonV2PalparkareaMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
