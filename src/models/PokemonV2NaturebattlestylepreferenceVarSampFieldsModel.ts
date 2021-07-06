import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceVarSampFieldsModelBase } from "./PokemonV2NaturebattlestylepreferenceVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceVarSampFieldsModel */
export interface PokemonV2NaturebattlestylepreferenceVarSampFieldsModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceVarSampFieldsModel */
export { selectFromPokemonV2NaturebattlestylepreferenceVarSampFields, pokemonV2NaturebattlestylepreferenceVarSampFieldsModelPrimitives, PokemonV2NaturebattlestylepreferenceVarSampFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceVarSampFieldsModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2NaturebattlestylepreferenceVarSampFieldsModel = PokemonV2NaturebattlestylepreferenceVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
