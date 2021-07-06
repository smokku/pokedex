import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaMinFieldsModelBase } from "./PokemonV2PalparkareaMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaMinFieldsModel */
export interface PokemonV2PalparkareaMinFieldsModelType extends Instance<typeof PokemonV2PalparkareaMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaMinFieldsModel */
export { selectFromPokemonV2PalparkareaMinFields, pokemonV2PalparkareaMinFieldsModelPrimitives, PokemonV2PalparkareaMinFieldsModelSelector } from "./PokemonV2PalparkareaMinFieldsModel.base"

/**
 * PokemonV2PalparkareaMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PalparkareaMinFieldsModel = PokemonV2PalparkareaMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
