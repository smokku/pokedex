import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameStddevFieldsModelBase } from "./PokemonV2GenerationnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameStddevFieldsModel */
export interface PokemonV2GenerationnameStddevFieldsModelType extends Instance<typeof PokemonV2GenerationnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameStddevFieldsModel */
export { selectFromPokemonV2GenerationnameStddevFields, pokemonV2GenerationnameStddevFieldsModelPrimitives, PokemonV2GenerationnameStddevFieldsModelSelector } from "./PokemonV2GenerationnameStddevFieldsModel.base"

/**
 * PokemonV2GenerationnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2GenerationnameStddevFieldsModel = PokemonV2GenerationnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
