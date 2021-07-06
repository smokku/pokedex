import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameVarianceFieldsModelBase } from "./PokemonV2MovenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameVarianceFieldsModel */
export interface PokemonV2MovenameVarianceFieldsModelType extends Instance<typeof PokemonV2MovenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameVarianceFieldsModel */
export { selectFromPokemonV2MovenameVarianceFields, pokemonV2MovenameVarianceFieldsModelPrimitives, PokemonV2MovenameVarianceFieldsModelSelector } from "./PokemonV2MovenameVarianceFieldsModel.base"

/**
 * PokemonV2MovenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovenameVarianceFieldsModel = PokemonV2MovenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
