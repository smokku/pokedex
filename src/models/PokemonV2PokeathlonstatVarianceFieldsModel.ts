import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatVarianceFieldsModelBase } from "./PokemonV2PokeathlonstatVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatVarianceFieldsModel */
export interface PokemonV2PokeathlonstatVarianceFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatVarianceFieldsModel */
export { selectFromPokemonV2PokeathlonstatVarianceFields, pokemonV2PokeathlonstatVarianceFieldsModelPrimitives, PokemonV2PokeathlonstatVarianceFieldsModelSelector } from "./PokemonV2PokeathlonstatVarianceFieldsModel.base"

/**
 * PokemonV2PokeathlonstatVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokeathlonstatVarianceFieldsModel = PokemonV2PokeathlonstatVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
