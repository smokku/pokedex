import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectStddevPopFieldsModelBase } from "./PokemonV2ItemflingeffectStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectStddevPopFieldsModel */
export interface PokemonV2ItemflingeffectStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectStddevPopFieldsModel */
export { selectFromPokemonV2ItemflingeffectStddevPopFields, pokemonV2ItemflingeffectStddevPopFieldsModelPrimitives, PokemonV2ItemflingeffectStddevPopFieldsModelSelector } from "./PokemonV2ItemflingeffectStddevPopFieldsModel.base"

/**
 * PokemonV2ItemflingeffectStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemflingeffectStddevPopFieldsModel = PokemonV2ItemflingeffectStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
