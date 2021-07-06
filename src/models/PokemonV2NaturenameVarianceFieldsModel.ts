import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameVarianceFieldsModelBase } from "./PokemonV2NaturenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameVarianceFieldsModel */
export interface PokemonV2NaturenameVarianceFieldsModelType extends Instance<typeof PokemonV2NaturenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameVarianceFieldsModel */
export { selectFromPokemonV2NaturenameVarianceFields, pokemonV2NaturenameVarianceFieldsModelPrimitives, PokemonV2NaturenameVarianceFieldsModelSelector } from "./PokemonV2NaturenameVarianceFieldsModel.base"

/**
 * PokemonV2NaturenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2NaturenameVarianceFieldsModel = PokemonV2NaturenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
