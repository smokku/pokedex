import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameMaxFieldsModelBase } from "./PokemonV2NaturenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameMaxFieldsModel */
export interface PokemonV2NaturenameMaxFieldsModelType extends Instance<typeof PokemonV2NaturenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameMaxFieldsModel */
export { selectFromPokemonV2NaturenameMaxFields, pokemonV2NaturenameMaxFieldsModelPrimitives, PokemonV2NaturenameMaxFieldsModelSelector } from "./PokemonV2NaturenameMaxFieldsModel.base"

/**
 * PokemonV2NaturenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2NaturenameMaxFieldsModel = PokemonV2NaturenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
