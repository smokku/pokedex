import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameMaxFieldsModelBase } from "./PokemonV2MoveattributenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameMaxFieldsModel */
export interface PokemonV2MoveattributenameMaxFieldsModelType extends Instance<typeof PokemonV2MoveattributenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameMaxFieldsModel */
export { selectFromPokemonV2MoveattributenameMaxFields, pokemonV2MoveattributenameMaxFieldsModelPrimitives, PokemonV2MoveattributenameMaxFieldsModelSelector } from "./PokemonV2MoveattributenameMaxFieldsModel.base"

/**
 * PokemonV2MoveattributenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveattributenameMaxFieldsModel = PokemonV2MoveattributenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
