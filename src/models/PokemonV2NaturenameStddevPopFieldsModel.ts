import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameStddevPopFieldsModelBase } from "./PokemonV2NaturenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameStddevPopFieldsModel */
export interface PokemonV2NaturenameStddevPopFieldsModelType extends Instance<typeof PokemonV2NaturenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameStddevPopFieldsModel */
export { selectFromPokemonV2NaturenameStddevPopFields, pokemonV2NaturenameStddevPopFieldsModelPrimitives, PokemonV2NaturenameStddevPopFieldsModelSelector } from "./PokemonV2NaturenameStddevPopFieldsModel.base"

/**
 * PokemonV2NaturenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2NaturenameStddevPopFieldsModel = PokemonV2NaturenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
