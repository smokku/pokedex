import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectStddevPopFieldsModelBase } from "./PokemonV2SupercontesteffectStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectStddevPopFieldsModel */
export interface PokemonV2SupercontesteffectStddevPopFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectStddevPopFieldsModel */
export { selectFromPokemonV2SupercontesteffectStddevPopFields, pokemonV2SupercontesteffectStddevPopFieldsModelPrimitives, PokemonV2SupercontesteffectStddevPopFieldsModelSelector } from "./PokemonV2SupercontesteffectStddevPopFieldsModel.base"

/**
 * PokemonV2SupercontesteffectStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2SupercontesteffectStddevPopFieldsModel = PokemonV2SupercontesteffectStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
