import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameMinFieldsModelBase } from "./PokemonV2MoveattributenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameMinFieldsModel */
export interface PokemonV2MoveattributenameMinFieldsModelType extends Instance<typeof PokemonV2MoveattributenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameMinFieldsModel */
export { selectFromPokemonV2MoveattributenameMinFields, pokemonV2MoveattributenameMinFieldsModelPrimitives, PokemonV2MoveattributenameMinFieldsModelSelector } from "./PokemonV2MoveattributenameMinFieldsModel.base"

/**
 * PokemonV2MoveattributenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributenameMinFieldsModel = PokemonV2MoveattributenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
