import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaVarianceFieldsModelBase } from "./PokemonV2PalparkareaVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaVarianceFieldsModel */
export interface PokemonV2PalparkareaVarianceFieldsModelType extends Instance<typeof PokemonV2PalparkareaVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaVarianceFieldsModel */
export { selectFromPokemonV2PalparkareaVarianceFields, pokemonV2PalparkareaVarianceFieldsModelPrimitives, PokemonV2PalparkareaVarianceFieldsModelSelector } from "./PokemonV2PalparkareaVarianceFieldsModel.base"

/**
 * PokemonV2PalparkareaVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PalparkareaVarianceFieldsModel = PokemonV2PalparkareaVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
