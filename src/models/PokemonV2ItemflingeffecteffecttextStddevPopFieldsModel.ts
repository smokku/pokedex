import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextStddevPopFields, pokemonV2ItemflingeffecteffecttextStddevPopFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel = PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
