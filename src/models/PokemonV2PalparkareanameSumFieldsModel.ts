import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameSumFieldsModelBase } from "./PokemonV2PalparkareanameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameSumFieldsModel */
export interface PokemonV2PalparkareanameSumFieldsModelType extends Instance<typeof PokemonV2PalparkareanameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameSumFieldsModel */
export { selectFromPokemonV2PalparkareanameSumFields, pokemonV2PalparkareanameSumFieldsModelPrimitives, PokemonV2PalparkareanameSumFieldsModelSelector } from "./PokemonV2PalparkareanameSumFieldsModel.base"

/**
 * PokemonV2PalparkareanameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PalparkareanameSumFieldsModel = PokemonV2PalparkareanameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
