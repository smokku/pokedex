import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameStddevFieldsModelBase } from "./PokemonV2MoveattributenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameStddevFieldsModel */
export interface PokemonV2MoveattributenameStddevFieldsModelType extends Instance<typeof PokemonV2MoveattributenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameStddevFieldsModel */
export { selectFromPokemonV2MoveattributenameStddevFields, pokemonV2MoveattributenameStddevFieldsModelPrimitives, PokemonV2MoveattributenameStddevFieldsModelSelector } from "./PokemonV2MoveattributenameStddevFieldsModel.base"

/**
 * PokemonV2MoveattributenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveattributenameStddevFieldsModel = PokemonV2MoveattributenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
