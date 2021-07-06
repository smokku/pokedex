import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameStddevFieldsModelBase } from "./PokemonV2NaturenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameStddevFieldsModel */
export interface PokemonV2NaturenameStddevFieldsModelType extends Instance<typeof PokemonV2NaturenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameStddevFieldsModel */
export { selectFromPokemonV2NaturenameStddevFields, pokemonV2NaturenameStddevFieldsModelPrimitives, PokemonV2NaturenameStddevFieldsModelSelector } from "./PokemonV2NaturenameStddevFieldsModel.base"

/**
 * PokemonV2NaturenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2NaturenameStddevFieldsModel = PokemonV2NaturenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
