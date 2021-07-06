import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextMaxFieldsModelBase } from "./PokemonV2ItemeffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextMaxFieldsModel */
export interface PokemonV2ItemeffecttextMaxFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextMaxFieldsModel */
export { selectFromPokemonV2ItemeffecttextMaxFields, pokemonV2ItemeffecttextMaxFieldsModelPrimitives, PokemonV2ItemeffecttextMaxFieldsModelSelector } from "./PokemonV2ItemeffecttextMaxFieldsModel.base"

/**
 * PokemonV2ItemeffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemeffecttextMaxFieldsModel = PokemonV2ItemeffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
