import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameStddevFieldsModelBase } from "./PokemonV2ItemattributenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameStddevFieldsModel */
export interface PokemonV2ItemattributenameStddevFieldsModelType extends Instance<typeof PokemonV2ItemattributenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameStddevFieldsModel */
export { selectFromPokemonV2ItemattributenameStddevFields, pokemonV2ItemattributenameStddevFieldsModelPrimitives, PokemonV2ItemattributenameStddevFieldsModelSelector } from "./PokemonV2ItemattributenameStddevFieldsModel.base"

/**
 * PokemonV2ItemattributenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributenameStddevFieldsModel = PokemonV2ItemattributenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
