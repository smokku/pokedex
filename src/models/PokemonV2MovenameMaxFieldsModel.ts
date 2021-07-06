import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameMaxFieldsModelBase } from "./PokemonV2MovenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameMaxFieldsModel */
export interface PokemonV2MovenameMaxFieldsModelType extends Instance<typeof PokemonV2MovenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameMaxFieldsModel */
export { selectFromPokemonV2MovenameMaxFields, pokemonV2MovenameMaxFieldsModelPrimitives, PokemonV2MovenameMaxFieldsModelSelector } from "./PokemonV2MovenameMaxFieldsModel.base"

/**
 * PokemonV2MovenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovenameMaxFieldsModel = PokemonV2MovenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
