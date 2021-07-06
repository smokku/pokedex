import { Instance } from "mobx-state-tree"
import { PokemonV2TypeStddevFieldsModelBase } from "./PokemonV2TypeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeStddevFieldsModel */
export interface PokemonV2TypeStddevFieldsModelType extends Instance<typeof PokemonV2TypeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeStddevFieldsModel */
export { selectFromPokemonV2TypeStddevFields, pokemonV2TypeStddevFieldsModelPrimitives, PokemonV2TypeStddevFieldsModelSelector } from "./PokemonV2TypeStddevFieldsModel.base"

/**
 * PokemonV2TypeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2TypeStddevFieldsModel = PokemonV2TypeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
