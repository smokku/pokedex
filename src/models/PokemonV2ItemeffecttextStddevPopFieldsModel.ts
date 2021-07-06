import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextStddevPopFieldsModelBase } from "./PokemonV2ItemeffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextStddevPopFieldsModel */
export interface PokemonV2ItemeffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextStddevPopFieldsModel */
export { selectFromPokemonV2ItemeffecttextStddevPopFields, pokemonV2ItemeffecttextStddevPopFieldsModelPrimitives, PokemonV2ItemeffecttextStddevPopFieldsModelSelector } from "./PokemonV2ItemeffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2ItemeffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemeffecttextStddevPopFieldsModel = PokemonV2ItemeffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
